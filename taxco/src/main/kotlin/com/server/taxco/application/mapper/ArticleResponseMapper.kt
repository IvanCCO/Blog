package com.server.taxco.application.mapper

import com.server.taxco.application.web.response.ArticleResponse
import com.server.taxco.common.Mapper
import com.server.taxco.domain.article.Article

@Mapper
class ArticleResponseMapper {
    fun toResponse(article: Article) = article.let {
        ArticleResponse(
            id = it.id.value,
            title = it.title,
            description = it.description,
            readTime = it.readTime,
            tag = it.tag.name,
            createdAt = article.createdAt,
        )
    }
}
