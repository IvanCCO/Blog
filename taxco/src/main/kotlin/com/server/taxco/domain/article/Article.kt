package com.server.taxco.domain.article

import com.server.taxco.application.web.request.CreateArticleRequest
import com.server.taxco.domain.article.tag.Tag
import java.time.LocalDateTime
import java.time.LocalDateTime.now

class Article(
    val id: ArticleId,
    val title: String,
    val description: String,
    readTime: Int = 5,
    val tag: Tag,
    val isVisible: Visibility,
    val createdAt: LocalDateTime,
    // TODO: Colocar o caminho padrão da imagem default
    image: String = "",
    content: String = "",
    updatedAt: LocalDateTime
) {

    var updatedAt: LocalDateTime = updatedAt
        private set

    var readTime: Int = readTime
        private set

    var image: String = image
        private set
    var content: String = content
        private set

    fun updateContent(path: String) {
        this.content = path
        this.updatedAt = now()
    }

    fun updateImage(path: String) {
        this.image = path
        this.updatedAt = now()
    }

    fun updateReadTime(readTime: Int) {
        this.readTime = readTime
    }

    override fun toString(): String {
        return "articleId: ${this.id}\ntitle: ${this.title}" +
            "\ndescription: ${this.description}\ntag:${this.tag}\n" +
            "isVisible: ${this.isVisible}"
    }

    companion object {
        fun of(createArticleDTO: CreateArticleRequest) = createArticleDTO.let {
            val now = now()
            Article(
                id = ArticleId(),
                title = it.title,
                description = it.description,
                tag = Tag(
                    name = it.tag
                ),
                isVisible = Visibility.PUBLIC,
                createdAt = now,
                updatedAt = now
            )
        }
    }
}
