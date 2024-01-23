package com.server.taxco.factory

import com.server.taxco.resources.database.TagDocument

object TagDocumentFactory {
    fun sample(
        name: String = "tec"
    ) = TagDocument(
        name = name
    )
}