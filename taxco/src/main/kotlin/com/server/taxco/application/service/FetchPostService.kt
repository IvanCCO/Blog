package com.server.taxco.application.service

import com.server.taxco.application.mapper.PostMapper
import com.server.taxco.application.response.PostResponse
import com.server.taxco.domain.Exception.PostNotFoundException
import com.server.taxco.domain.post.PostId
import com.server.taxco.domain.post.PostRepository
import com.server.taxco.resources.database.PostDocument
import org.springframework.data.domain.Page
import org.springframework.data.domain.PageRequest
import org.springframework.data.domain.Sort
import org.springframework.stereotype.Service

@Service
class FetchPostService(
    private val repository: PostRepository,
    private val mapper: PostMapper
) {
    fun byId(postId: String): PostResponse {
        val id = PostId(postId)
        val post = repository.findById(id) ?: throw PostNotFoundException(id)
        return mapper.toResponse(post)
    }

    fun byPage(page: Int, size: Int): Page<PostDocument> {
        val pageable = PageRequest.of(page, size, Sort.by("createdAt"))
        val posts = repository.findAll(pageable)
        return posts
    }
}
