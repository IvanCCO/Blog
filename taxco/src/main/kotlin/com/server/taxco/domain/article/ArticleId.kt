package com.server.taxco.domain.article

import com.server.taxco.common.ID

@JvmInline
value class ArticleId(val value: String = ID.generate()) : ID {
    init {
        if (value.isEmpty()) throw Exception()
    }
}
