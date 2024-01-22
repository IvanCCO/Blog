package com.server.taxco.domain.article

import com.server.taxco.resources.database.ArticleDocument
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable

// TODO: Pensar em alguma solução melhor para fazer isso aqui sem importar o pageable direto no domain

/** responsible for make the contract of database operations */
interface ArticleRepository {
    /**
     * search for a specific Article domain object
     * @param articleId the article id that's going to be looking for
     **/
    fun findById(articleId: ArticleId): Article?
    /**
     *save a Article object into the database
     * @param article the article object that's going to be saved
     **/
    fun save(article: Article)
    /**
     * fetch all the articles per page
     * @param pageable the object to decide the size and which page return
     **/
    fun findAll(pageable: Pageable): Page<ArticleDocument>
    /**
     * find a article by article title
     * @param name name of the article that's going to be search
     **/
    fun findByTitle(name: String): Article?

    /**
     * Return the last posted article order by creation date
     */
    fun lastArticle() : Article?
}
