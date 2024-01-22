package com.server.taxco.resources.database

import com.server.taxco.application.web.response.ArticleResponse
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.data.repository.PagingAndSortingRepository
import org.springframework.stereotype.Repository

@Repository
interface ArticleRepositorySpring :
    MongoRepository<ArticleDocument, String>,
    PagingAndSortingRepository<ArticleDocument, String> {
    override fun findAll(pageable: Pageable): Page<ArticleDocument>
    fun findByTitle(name: String): ArticleDocument?
    fun findFirstByOrderByCreatedAtDesc() : ArticleDocument?
}
