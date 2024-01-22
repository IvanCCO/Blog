package com.server.taxco.domain.service.impl

import com.server.taxco.application.mapper.ArticleMapper
import com.server.taxco.application.web.response.ArticleResponse
import com.server.taxco.domain.Exception.ArticleNotFoundException
import com.server.taxco.domain.Exception.ContentNotFoundException
import com.server.taxco.domain.Exception.ImageNotFoundException
import com.server.taxco.domain.article.Article
import com.server.taxco.domain.article.ArticleId
import com.server.taxco.domain.article.ArticleRepository
import com.server.taxco.domain.service.FetchArticleService
import com.server.taxco.resources.database.ArticleDocument
import com.server.taxco.resources.storage.ObjectType
import com.server.taxco.resources.storage.S3Operation
import org.springframework.data.domain.Page
import org.springframework.data.domain.PageRequest
import org.springframework.data.domain.Sort
import org.springframework.stereotype.Service

@Service
class FetchArticleServiceImpl(
    private val repository: ArticleRepository,
    private val mapper: ArticleMapper,
    private val s3Operation: S3Operation
) : FetchArticleService {
    override fun byId(articleId: String): ArticleResponse {
        val id = ArticleId(articleId)
        val article = repository.findById(id) ?: throw ArticleNotFoundException(id)
        return mapper.toResponse(article)
    }
    override fun byPage(page: Int, size: Int): Page<ArticleDocument> {
        val field = Article::createdAt
        val pageable = PageRequest.of(page, size, Sort.by(field.name))
        val articles = repository.findAll(pageable)
        return articles
    }
    override fun image(articleId: String): ByteArray {
        val id = ArticleId(articleId)
        return s3Operation.getObject(id, ObjectType.IMAGE) ?: throw ImageNotFoundException(id)
    }
    override fun content(articleId: String): ByteArray {
        val id = ArticleId(articleId)
        return s3Operation.getObject(id, ObjectType.IMAGE) ?: throw ContentNotFoundException(id)
    }

    override fun last(): ArticleResponse {
        val article = repository.lastArticle() ?: throw ArticleNotFoundException(null)
        return mapper.toResponse(article)
    }
}
