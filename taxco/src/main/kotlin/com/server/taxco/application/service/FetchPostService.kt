package com.server.taxco.application.service

import com.server.taxco.domain.Exception.PostNotFoundException
import com.server.taxco.domain.Post
import com.server.taxco.domain.PostId
import com.server.taxco.domain.PostRepository
import com.server.taxco.resources.PostDocument
import org.springframework.data.domain.Page
import org.springframework.data.domain.PageRequest
import org.springframework.data.domain.Sort
import org.springframework.stereotype.Service

@Service
class FetchPostService(
    private val repository: PostRepository
) {
    fun byId(postId: String): Post {

        val id = PostId(postId)

        val post = repository.findById(id) ?: throw PostNotFoundException(id)

        return post
    }

    fun byPage(page: Int, size: Int): Page<PostDocument> {

        val pageable = PageRequest.of(page, size, Sort.by("createdAt"))

        val posts = repository.findAll(pageable)

        return posts
    }
}
