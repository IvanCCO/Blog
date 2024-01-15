package com.server.taxco.application.service

import com.server.taxco.domain.Exception.PostNotFoundException
import com.server.taxco.domain.Post
import com.server.taxco.domain.PostId
import com.server.taxco.domain.PostRepository
import org.springframework.stereotype.Service

@Service
class FetchPostService(
    private val repository: PostRepository
) {

    fun execute(postId: String): Post {

        val id = PostId(postId)

        val post = repository.findById(id) ?: throw PostNotFoundException(id)

        return post
    }
}
