package com.server.taxco.factory

import com.server.taxco.domain.article.tag.Tag

object TagFactory {
    fun sample(
        name: String = "tec"
    ) = Tag(
        name = name
    )
}
