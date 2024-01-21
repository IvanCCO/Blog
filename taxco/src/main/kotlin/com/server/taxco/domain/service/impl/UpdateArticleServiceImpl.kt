package com.server.taxco.domain.service.impl

import com.server.taxco.application.web.request.CreateArticleRequest
import com.server.taxco.common.LoggableClass
import com.server.taxco.domain.Exception.ArticleAlreadyExistsException
import com.server.taxco.domain.dto.CreateArticleDTO
import com.server.taxco.domain.article.Article
import com.server.taxco.domain.article.ArticleRepository
import com.server.taxco.domain.service.UpdateArticleService
import com.server.taxco.resources.storage.ObjectType
import com.server.taxco.resources.storage.S3Operation
import org.springframework.stereotype.Service
import org.springframework.web.multipart.MultipartFile

@Service
class UpdateArticleServiceImpl(
    private val repository: ArticleRepository,
    private val s3Operation : S3Operation
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
        s3Operation.putObject(articleId,file.bytes,ObjectType.IMAGE)
    }

    override fun insertContent(articleId: String, file: MultipartFile) {
        s3Operation.putObject(articleId,file.bytes,ObjectType.CONTENT)
    }

    override fun updateBasicInfo(articleId: String, request: CreateArticleRequest) {
    }

    // TODO: Ver se vai ter lógica de deletar o registro atual
    override fun updateImage(articleId: String, file: MultipartFile) {
        s3Operation.putObject(articleId,file.bytes,ObjectType.IMAGE)
    }
    override fun updateContent(articleId: String, file: MultipartFile) {
        s3Operation.putObject(articleId,file.bytes,ObjectType.CONTENT)
    }
}
