package com.server.taxco.common

import com.server.taxco.domain.Exception.DomainException
import org.springframework.http.HttpStatus

fun httpStatusOf(
    exception: DomainException
) = when (exception.type) {
    ErrorType.UNKNOWN -> HttpStatus.INTERNAL_SERVER_ERROR
    ErrorType.ARTICLE_NOT_FOUND -> HttpStatus.NOT_FOUND
    ErrorType.ARTICLE_ALREADY_EXISTS,
    ErrorType.IMAGE_ALREADY_EXISTS,
    ErrorType.IMAGE_NOT_FOUND,
    ErrorType.CONTENT_NOT_FOUND,
    ErrorType.CONTENT_ALREADY_EXISTS,
    -> HttpStatus.BAD_REQUEST
}
