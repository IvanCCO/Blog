package com.server.taxco.application.mapper

import com.server.taxco.application.response.PostResponse
import com.server.taxco.common.Mapper
import com.server.taxco.domain.post.Post

@Mapper
class PostResponseMapper {
    fun toResponse(post: Post) = post.let {
        PostResponse(
            id = it.postId.value,
            title = it.title,
            description = it.description,
            readTime = it.readTime,
            tag = it.tag.name,
            createdAt = post.createdAt,
        )
    }
}
