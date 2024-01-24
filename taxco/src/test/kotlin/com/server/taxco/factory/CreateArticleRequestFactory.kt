package com.server.taxco.factory

import com.server.taxco.application.web.request.CreateArticleRequest

object CreateArticleRequestFactory {
    fun sample(
        title: String = "titulo",
        description: String = "description",
        tag: String = "tag"
    ) = CreateArticleRequest(
        title = title,
        description = description,
        tag = tag,
    )
}