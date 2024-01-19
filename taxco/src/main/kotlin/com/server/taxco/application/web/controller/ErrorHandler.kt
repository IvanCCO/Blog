package com.server.taxco.application.web.controller

import com.server.taxco.application.web.response.ApiError
import com.server.taxco.common.ErrorType
import com.server.taxco.common.LoggableClass
import com.server.taxco.common.httpStatusOf
import com.server.taxco.domain.Exception.DomainException
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.bind.annotation.RestControllerAdvice

/**
 * Application error handler where will capture the application error and return a mapped http status and
 * a better error api message.
 */
@RestControllerAdvice
class ErrorHandler : LoggableClass() {

    /**
     * Map all the generic exceptions of the application -> Not Mapped exceptions
     */
    @ExceptionHandler(Exception::class)
    fun handleGenericException(exception: Exception): ResponseEntity<ApiError> {
        val response = ApiError(
            type = ErrorType.UNKNOWN,
            message = exception.message
        )
        logError("Exception occur", exception)
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response)
    }

    /**
     * Map all the domains exceptions of the application -> Mapped exceptions
     */
    @ExceptionHandler(DomainException::class)
    fun handleDomainException(exception: DomainException): ResponseEntity<ApiError> {
        val response = ApiError.of(exception)
        logError("Exception occur", exception)
        return ResponseEntity.status(httpStatusOf(exception)).body(response)
    }
}
