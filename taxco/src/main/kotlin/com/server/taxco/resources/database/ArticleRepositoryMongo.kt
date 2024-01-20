package com.server.taxco.resources.database

import com.server.taxco.application.mapper.ArticleMapper
import com.server.taxco.domain.article.Article
import com.server.taxco.domain.article.ArticleId
import com.server.taxco.domain.article.ArticleRepository
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Repository

@Repository
class ArticleRepositoryMongo(
    private val repository: ArticleRepositorySpring,
    private val mapper: ArticleMapper
) : ArticleRepository {

    override fun findById(articleId: ArticleId): Article? {
        val document = repository.findByIdOrNull(articleId.value)
        return mapper.toDomain(document)
    }

    override fun save(article: Article) {
        val document = mapper.toDocument(article)
        repository.save(document)
    }

    override fun findAll(pageable: Pageable): Page<ArticleDocument> {
        val documents = repository.findAll(pageable)
        return documents
    }

    override fun findByTitle(name: String): Article? {
        val document = repository.findByTitle(name)
        return mapper.toDomain(document)
    }
}
