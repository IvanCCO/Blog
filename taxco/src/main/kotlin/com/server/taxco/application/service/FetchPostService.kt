package com.server.taxco.application.service

import com.server.taxco.application.mapper.PostMapper
import com.server.taxco.application.web.response.PostResponse
import com.server.taxco.domain.Exception.PostNotFoundException
import com.server.taxco.domain.post.Post
import com.server.taxco.domain.post.PostId
import com.server.taxco.domain.post.PostRepository
import com.server.taxco.resources.database.PostDocument
import org.springframework.data.domain.Page
import org.springframework.data.domain.PageRequest
import org.springframework.data.domain.Sort
import org.springframework.stereotype.Service
import kotlin.reflect.KProperty

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

    fun byPage(page: Int, size: Int, sortedBy : KProperty<*>): Page<PostDocument> {
        val pageable = PageRequest.of(page, size, Sort.by(sortedBy.name))
        val posts = repository.findAll(pageable)
        return posts
    }
}
