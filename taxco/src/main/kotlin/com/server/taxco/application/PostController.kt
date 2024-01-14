package com.server.taxco.application

import com.server.taxco.application.request.createPostRequest
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
    private val repository: PostRepositoryMongo
) {


    @GetMapping("{postId}")
    fun getPostById(
        @PathVariable postId: Int
    ) = ResponseEntity.ok(PostResponse(
        id = 1,
        title = "I am a very good title",
        description = "I am a very good description and a iam trying to explain something",
        readTime = 1,
        createdAt = LocalDate.now(),
        updatedAt = LocalDate.now()
    ))


    @PostMapping
    fun createPost(
//        @RequestBody createPostRequest: createPostRequest
    ) = ResponseEntity.ok(repository.save())

}