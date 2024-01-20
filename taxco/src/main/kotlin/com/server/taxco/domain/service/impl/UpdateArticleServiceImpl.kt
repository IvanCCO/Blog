package com.server.taxco.domain.service.impl

import com.server.taxco.application.web.request.CreateArticleRequest
import com.server.taxco.common.LoggableClass
import com.server.taxco.domain.Exception.ArticleAlreadyExistsException
import com.server.taxco.domain.dto.CreateArticleDTO
import com.server.taxco.domain.article.Article
import com.server.taxco.domain.article.ArticleRepository
import com.server.taxco.domain.service.UpdateArticleService
import com.server.taxco.resources.storage.S3Service
import org.springframework.stereotype.Service
import org.springframework.web.multipart.MultipartFile

@Service
class UpdateArticleServiceImpl(
    private val repository: ArticleRepository,
    private val s3Operation : S3Service
) : LoggableClass(), UpdateArticleService {

    override fun create(request: CreateArticleRequest) {
        if (repository.findByTitle(request.title) != null) {
            throw ArticleAlreadyExistsException(request.title)
        }
        val article = Article.of(
            CreateArticleDTO(
                title = request.title,
                description = request.description,
                readTime = 10,
                tagName = request.tag
            )
        )
        logInfo("Saving article $article")
        repository.save(article)
    }

    // TODO: Arruamar para ter um contrato inves de ter direto o s3
    override fun insertImage(articleId: String, file: MultipartFile) {
        s3Operation.putObject("bucket", "/article/$articleId/imagem", "uifn".toByteArray())
    }

    override fun insertContent(articleId: String, file: MultipartFile) {
        s3Operation.putObject("bucket", "/article/$articleId/content", file.bytes)
    }

    override fun updateBasicInfo(articleId: String, request: CreateArticleRequest) {
    }

    override fun updateImage(articleId: String, file: MultipartFile) {
        s3Operation.putObject("bucket", "article/$articleId/content", file.bytes)
    }
    override fun updateContent(articleId: String, file: MultipartFile) {
        s3Operation.putObject("bucket", "article/$articleId/content", file.bytes)
    }
}
