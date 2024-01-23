package com.server.taxco.domain.service.impl

import com.server.taxco.application.web.request.CreateArticleRequest
import com.server.taxco.common.LoggableClass
import com.server.taxco.domain.Exception.ArticleAlreadyExistsException
import com.server.taxco.domain.Exception.ArticleNotFoundException
import com.server.taxco.domain.Exception.ContentAlreadyExistsException
import com.server.taxco.domain.Exception.ContentNotFoundException
import com.server.taxco.domain.Exception.ImageAlreadyExistsException
import com.server.taxco.domain.Exception.ImageNotFoundException
import com.server.taxco.domain.article.Article
import com.server.taxco.domain.article.ArticleId
import com.server.taxco.domain.article.ArticleRepository
import com.server.taxco.domain.service.UpdateArticleService
import com.server.taxco.resources.storage.ObjectType
import com.server.taxco.resources.storage.S3Operation
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import org.springframework.web.multipart.MultipartFile

@Service
class UpdateArticleServiceImpl(
    private val repository: ArticleRepository,
    private val s3Operation: S3Operation
) : LoggableClass(), UpdateArticleService {

    @Transactional
    override fun create(request: CreateArticleRequest): ArticleId {
        if (repository.findByTitle(request.title) != null) {
            throw ArticleAlreadyExistsException(request.title)
        }
        val newArticle = Article.of(request)
        logInfo("Saving article with title ${newArticle.title}")
        val article = repository.save(newArticle)
        return article.id
    }

    override fun updateBasicInfo(articleId: String, request: CreateArticleRequest) {
        // TODO
    }

    override fun insertImage(articleId: String, file: MultipartFile) = ArticleId(articleId).findByIdOrThrow().let {
        if (it.image.isNotBlank()) {
            throw ImageAlreadyExistsException(it.id)
        }
        val path = this.s3Operation.putObject(it.id, file.bytes, ObjectType.IMAGE)
        it.updateImage(path)
        this.repository.save(it)
        logInfo("Finish to insert image on article with id: $articleId")
    }

    override fun insertContent(articleId: String, file: MultipartFile) = ArticleId(articleId).findByIdOrThrow().let {
        if (it.image.isNotBlank()) {
            throw ContentAlreadyExistsException(it.id)
        }
        val path = this.s3Operation.putObject(it.id, file.bytes, ObjectType.CONTENT)
        it.updateContent(path)
        it.updateReadTime(calculateReadTime(file.bytes))
        this.repository.save(it)
        logInfo("Finish to insert content on article with id: $articleId")
    }

    override fun updateImage(articleId: String, file: MultipartFile) = ArticleId(articleId).findByIdOrThrow().let {
        if (this.s3Operation.getObject(it.id, ObjectType.CONTENT) == null) {
            throw ImageNotFoundException(it.id)
        }
        val path = this.s3Operation.putObject(it.id, file.bytes, ObjectType.IMAGE)
        it.updateImage(path)
        this.repository.save(it)
        logInfo("Finish to update image on article with id: $articleId")
    }
    override fun updateContent(articleId: String, file: MultipartFile) = ArticleId(articleId).findByIdOrThrow().let {
        if (this.s3Operation.getObject(it.id, ObjectType.CONTENT) == null) {
            throw ContentNotFoundException(it.id)
        }
        val path = this.s3Operation.putObject(it.id, file.bytes, ObjectType.CONTENT)
        it.updateContent(path)
        this.repository.save(it)
        logInfo("Finish to update content on article with id: $articleId")
    }
    private fun ArticleId.findByIdOrThrow(id: ArticleId = this) =
        repository.findById(id) ?: throw ArticleNotFoundException(id)
    private fun calculateReadTime(file: ByteArray): Int {
        // TODO: Get those info from properties
        val bytesByWord = 5
        val wordsInBytes = file.size / bytesByWord
        val time = wordsInBytes / 150
        return if (time <= 0) 1 else time
    }
}