package com.server.taxco.common

import com.server.taxco.domain.Exception.DomainException
import org.springframework.http.HttpStatus

fun httpStatusOf(
    exception: DomainException
) = when (exception.type) {

    ErrorType.UNKNOWN -> HttpStatus.INTERNAL_SERVER_ERROR
    ErrorType.POST_NOT_FOUND -> HttpStatus.NOT_FOUND
    ErrorType.POST_ALREADY_EXISTS -> HttpStatus.BAD_REQUEST
}
