package com.server.taxco.application

import com.server.taxco.application.request.CreatePostRequest
import com.server.taxco.application.service.CreatePostService
import com.server.taxco.application.service.FetchPostService
import com.server.taxco.domain.Post
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("post")
class PostController(
    private val createPost: CreatePostService,
    private val fetchPost: FetchPostService,
) {

    @PostMapping
    fun createPost(
        @RequestBody createPostRequest: CreatePostRequest
    ): ResponseEntity<Post> {

        createPost.execute(createPostRequest)

        return ResponseEntity.status(HttpStatus.CREATED).build()
    }

    @GetMapping("{postId}")
    fun getPostById(
        @PathVariable postId: String
    ): ResponseEntity<Post> {

        val response = fetchPost.execute(postId)

        return ResponseEntity.ok(response)
    }
}
