package com.server.taxco.application.mapper

import com.server.taxco.application.response.PostResponse
import com.server.taxco.common.Mapper
import com.server.taxco.domain.Post

@Mapper
class PostResponseMapper {

    fun toResponse(post : Post?) = post?.let {
        PostResponse(
            id = it.id,
            title = it.title,
            description = it.description,
            readTime = it.readTime,
            tag = it.tag,
            createdAt = post.createdAt,
            updatedAt = post.updatedAt
        )
    }

}