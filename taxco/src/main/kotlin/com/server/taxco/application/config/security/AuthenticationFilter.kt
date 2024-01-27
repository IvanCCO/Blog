package com.server.taxco.application.config.security

import jakarta.servlet.FilterChain
import jakarta.servlet.ServletException
import jakarta.servlet.ServletRequest
import jakarta.servlet.ServletResponse
import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import org.springframework.http.MediaType
import org.springframework.security.authentication.BadCredentialsException
import org.springframework.security.core.Authentication
import org.springframework.security.core.authority.AuthorityUtils
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.web.filter.GenericFilterBean
import java.io.IOException


class AuthenticationFilter(
    private val header: String, private val secret: String
) : GenericFilterBean() {
    @Throws(IOException::class, ServletException::class)
    override fun doFilter(request: ServletRequest, response: ServletResponse, filterChain: FilterChain) {
        try {

            val authentication: Authentication = this.getAuth(request as HttpServletRequest)

            SecurityContextHolder.getContext().authentication = authentication
        } catch (exp: Exception) {
            val httpResponse = response as HttpServletResponse
            httpResponse.status = HttpServletResponse.SC_UNAUTHORIZED
            httpResponse.contentType = MediaType.APPLICATION_JSON_VALUE
            val writer = httpResponse.writer
            writer.print(exp.message)
            writer.flush()
            writer.close()
        }

        filterChain.doFilter(request, response)
    }

    private fun getAuth(request: HttpServletRequest): Authentication {

        val apiKey = request.getHeader(this.header)
        val isAllowed = request.requestURI.endsWith(IMAGE) && request.method == GET

        if (isAllowed) {
            return ApiKeyAuthentication(this.secret, AuthorityUtils.NO_AUTHORITIES)
        }

        if ((apiKey == null || apiKey != this.secret)) {
            throw BadCredentialsException("Invalid API Key")
        }

        return ApiKeyAuthentication(apiKey, AuthorityUtils.NO_AUTHORITIES)
    }

    companion object {
        const val IMAGE = "/image"
        const val GET = "GET"
    }

}