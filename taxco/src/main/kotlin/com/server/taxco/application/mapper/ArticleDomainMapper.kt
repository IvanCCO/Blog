package com.server.taxco.application.mapper

import com.server.taxco.common.Mapper
import com.server.taxco.domain.article.Article
import com.server.taxco.domain.article.ArticleId
import com.server.taxco.domain.article.Visibility
import com.server.taxco.domain.article.tag.Tag
import com.server.taxco.resources.database.ArticleDocument

@Mapper
class ArticleDomainMapper {
    fun toDomain(document: ArticleDocument?) = document?.let {
        Article(
            id = ArticleId(it.id),
            title = it.title,
            description = it.description,
            readTime = it.readTime,
            tag = Tag(it.tag.name),
            isVisible = Visibility.valueOf(it.isVisible),
            createdAt = it.createdAt,
            updatedAt = it.updatedAt
        )
    }
}
