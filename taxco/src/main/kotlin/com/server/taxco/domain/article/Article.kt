package com.server.taxco.domain.article

import com.server.taxco.domain.dto.CreateArticleDTO
import com.server.taxco.domain.article.tag.Tag
import java.time.LocalDateTime.now
import java.time.LocalDateTime

class Article(
    val articleId: ArticleId,
    val title: String,
    val description: String,
    val readTime: Int,
    val tag: Tag,
    val isVisible: Visibility,
    val createdAt: LocalDateTime,
    updatedAt: LocalDateTime
) {

    companion object {
        fun of(createArticleDTO: CreateArticleDTO) = createArticleDTO.let {
            val now = now()
            Article(
                articleId = ArticleId(),
                title = it.title,
                description = it.description,
                readTime = it.readTime,
                tag = Tag(
                    name = it.tagName
                ),
                isVisible = Visibility.PUBLIC,
                createdAt = now,
                updatedAt = now
            )
        }
    }

    var updatedAt: LocalDateTime = updatedAt
        private set

    override fun toString(): String {
        return "articleId: ${this.articleId}\ntitle: ${this.title}" +
            "\ndescription: ${this.description}\ntag:${this.tag}\n" +
            "isVisible: ${this.isVisible}"
    }
}
