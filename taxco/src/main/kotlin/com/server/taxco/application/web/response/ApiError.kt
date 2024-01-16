package com.server.taxco.application.web.response

import com.server.taxco.common.ErrorType
import com.server.taxco.domain.Exception.DomainException

data class ApiError(
    val type: ErrorType,
    val message: String? = "Unknow Error"
) {

    companion object {
        fun of(exception: DomainException) = ApiError(
            type = exception.type,
            message = exception.message
        )
    }
}
