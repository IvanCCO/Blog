package com.server.taxco.domain.Exception

import com.server.taxco.common.ErrorType

open class DomainException(val type: ErrorType, val msg: String) : RuntimeException(msg)
