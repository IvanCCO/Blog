package com.server.taxco.domain.article

import com.server.taxco.domain.dto.CreateArticleDTO
import com.server.taxco.domain.article.tag.Tag
import java.time.LocalDateTime.now
import java.time.LocalDateTime

class Article(
    val id: ArticleId,
    val title: String,
    val description: String,
    readTime: Int = 5,
    val tag: Tag,
    val isVisible: Visibility,
    val createdAt: LocalDateTime,
    image : String = "",
    content : String = "",
    updatedAt: LocalDateTime
) {

    var updatedAt: LocalDateTime = updatedAt
        private set

    var readTime : Int = readTime
        private set

    var imageId : String = image
        private set
    var contentId : String = content
        private set
    fun updateContent(path : String){
        this.contentId = path
        this.updatedAt = now()
    }
    fun updateImage(path : String){
        this.imageId = path
        this.updatedAt = now()
    }

    override fun toString(): String {
        return "articleId: ${this.id}\ntitle: ${this.title}" +
            "\ndescription: ${this.description}\ntag:${this.tag}\n" +
            "isVisible: ${this.isVisible}"
    }
    companion object {
        fun of(createArticleDTO: CreateArticleDTO) = createArticleDTO.let {
            val now = now()
            Article(
                id = ArticleId(),
                title = it.title,
                description = it.description,
                tag = Tag(
                    name = it.tagName
                ),
                isVisible = Visibility.PUBLIC,
                createdAt = now,
                updatedAt = now
            )
        }
    }

}
