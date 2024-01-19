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

@RestControllerAdvice
class ErrorHandler : LoggableClass() {

    @ExceptionHandler(Exception::class)
    fun handleGenericException(exception: Exception): ResponseEntity<ApiError> {
        val response = ApiError(
            type = ErrorType.UNKNOWN,
            message = exception.message
        )
        logError("Exception occur", exception)
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response)
    }

    @ExceptionHandler(DomainException::class)
    fun handleDomainException(exception: DomainException): ResponseEntity<ApiError> {
        val response = ApiError.of(exception)
        logError("Exception occur", exception)
        return ResponseEntity.status(httpStatusOf(exception)).body(response)
    }
}
