package com.server.taxco

import com.server.taxco.application.response.ApiError
import com.server.taxco.common.ErrorType
import com.server.taxco.common.httpStatusOf
import com.server.taxco.domain.DomainException
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.bind.annotation.RestControllerAdvice

@RestControllerAdvice
class ErrorHandler {

    @ExceptionHandler(Exception::class)
    fun handleGenericException(exception: Exception): ResponseEntity<ApiError> {

        val response = ApiError(
            type = ErrorType.UNKNOWN,
            message = exception.message
        )

        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response)
    }

    @ExceptionHandler(DomainException::class)
    fun handleDomainException(exception: DomainException): ResponseEntity<ApiError> {

        val response = ApiError.of(exception)

        return ResponseEntity.status(httpStatusOf(exception)).body(response)
    }
}
