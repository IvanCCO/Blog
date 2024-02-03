package com.server.taxco.resources.database

import com.server.taxco.application.mapper.ArticleMapper
import com.server.taxco.common.LoggableClass
import com.server.taxco.domain.article.Article
import com.server.taxco.domain.article.ArticleId
import com.server.taxco.domain.article.ArticleRepository
import com.server.taxco.domain.article.dto.ArticlePageDTO
import org.springframework.data.domain.Page
import org.springframework.data.domain.PageRequest
import org.springframework.data.domain.Pageable
import org.springframework.data.domain.Sort
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Repository

@Repository
class ArticleRepositoryMongo(
    private val repository: ArticleRepositorySpring,
    private val mapper: ArticleMapper
) : ArticleRepository, LoggableClass() {

    override fun findById(articleId: ArticleId): Article? {
        logInfo("fetch article with id: $articleId")
        val document = repository.findByIdOrNull(articleId.value)
        return mapper.toDomain(document)
    }

    override fun save(article: Article): Article {
        logInfo("try save article with title: ${article.title}")
        val document = mapper.toDocument(article)
        val response = repository.save(document)
        logInfo("successfully saved article with title: ${article.title}")
        return mapper.toDomain(response)!!
    }

    override fun findAll(page: Int, size: Int): ArticlePageDTO {

        val pageable = PageRequest.of(page, size, Sort.by(ArticleDocument::createdAt.name).descending())

        val documents = repository.findAll(pageable)

        val domainArticles = documents.content.map { article ->
            mapper.toDomain(article)
        }

        return ArticlePageDTO(
            isLastPage = documents.isLast,
            isFirstPage = documents.isFirst,
            articles = domainArticles
        )
    }

    override fun findByTitle(name: String): Article? {
        logInfo("fetch article with title: $name")
        val document = repository.findByTitle(name)
        return mapper.toDomain(document)
    }

    override fun lastArticle(): Article? {
        logInfo("fetch last article sorted by creation date")
        val document = repository.findFirstByOrderByCreatedAtDesc()
        return mapper.toDomain(document)
    }
}
