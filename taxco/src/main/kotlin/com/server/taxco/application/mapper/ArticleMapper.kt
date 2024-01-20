package com.server.taxco.application.mapper

import com.server.taxco.common.Mapper
import com.server.taxco.domain.article.Article
import com.server.taxco.resources.database.ArticleDocument

@Mapper
class ArticleMapper(
    private val domainMapper: ArticleDomainMapper,
    private val responseMapper: ArticleResponseMapper,
    private val documentMapper: ArticleDocumentMapper
) {
    fun toDomain(document: ArticleDocument?) = domainMapper.toDomain(document)
    fun toResponse(article: Article) = responseMapper.toResponse(article)
    fun toDocument(article: Article) = documentMapper.toDocument(article)
}
