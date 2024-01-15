package com.server.taxco.domain

import com.server.taxco.common.ID

@JvmInline
value class PostId(val value: String = ID.generate()) : ID {

    init {
        if (value.isEmpty()) throw Exception()
    }
}
