package com.server.taxco.domain.post

import com.server.taxco.domain.post.tag.Tag
import java.time.LocalDate

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

    var updatedAt: LocalDate = updatedAt
        private set
}
