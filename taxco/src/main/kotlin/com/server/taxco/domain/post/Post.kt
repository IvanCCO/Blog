package com.server.taxco.domain.post

import com.server.taxco.domain.dto.CreatePostDTO
import com.server.taxco.domain.post.tag.Tag
import java.time.LocalDate
import java.time.LocalDate.now

class Post(
    val postId: PostId,
    val title: String,
    val description: String,
    val readTime: Int,
    val tag: Tag,
    val isVisible: Visibility,
    val createdAt: LocalDate,
    updatedAt: LocalDate,
) {

    companion object{

        fun of(createPostDTO: CreatePostDTO) = createPostDTO.let {
            val now = now()
            Post(
                postId = PostId(),
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


    var updatedAt: LocalDate = updatedAt
        private set


}
