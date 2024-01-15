package com.server.taxco.application

import com.server.taxco.application.mapper.PostMapper
import com.server.taxco.application.request.CreatePostRequest
import com.server.taxco.application.response.PostResponse
import com.server.taxco.resources.PostRepositoryMongo
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.time.LocalDate


@RestController
@RequestMapping("post")
class PostController(
    private val repository: PostRepositoryMongo,
    private val mapper : PostMapper
) {


    @GetMapping("{postId}")
    fun getPostById(
        @PathVariable postId: String
    ) : ResponseEntity<PostResponse> {

        val post = repository.findById(postId)

        val response = mapper.toResponse(post)

        return ResponseEntity.ok(response)
    }


    @PostMapping
    fun createPost(
        @RequestBody createPostRequest: CreatePostRequest
    ) = ResponseEntity.ok(repository.save())

}