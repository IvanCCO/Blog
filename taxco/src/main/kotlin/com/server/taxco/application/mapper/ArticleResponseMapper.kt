package com.server.taxco.application.mapper

import com.server.taxco.application.web.response.ArticleResponse
import com.server.taxco.common.Mapper
import com.server.taxco.domain.article.Article

@Mapper
class ArticleResponseMapper {
    fun toResponse(article: Article) = article.run {
        ArticleResponse(
            id = id.value,
            title = title,
            description = description,
            readTime = readTime,
            tag = tag.name,
            createdAt = article.createdAt,
        )
    }
}
