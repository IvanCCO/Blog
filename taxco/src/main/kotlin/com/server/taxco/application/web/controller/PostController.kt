package com.server.taxco.application.web.controller

import com.server.taxco.application.web.request.CreatePostRequest
import com.server.taxco.application.web.response.PostResponse
import com.server.taxco.common.LoggableClass
import com.server.taxco.domain.post.Post
import com.server.taxco.domain.service.FetchPostService
import com.server.taxco.domain.service.UpdatePostService
import com.server.taxco.resources.database.PostDocument
import org.springframework.data.domain.Page
import org.springframework.http.HttpStatus
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.multipart.MultipartFile

@RestController
@RequestMapping("post")
class PostController(
    private val createPost: UpdatePostService,
    private val fetchPost: FetchPostService,
) : LoggableClass() {

    @PostMapping
    fun createPost(
        @RequestBody createPostRequest: CreatePostRequest
    ): ResponseEntity<Post> {
        logInfo("Request to create Post received with title ${createPostRequest.title}")
        createPost.create(createPostRequest)
        return ResponseEntity.status(HttpStatus.CREATED).build()
    }

    @GetMapping("{postId}")
    fun getPostById(
        @PathVariable postId: String
    ): ResponseEntity<PostResponse> {
        logInfo("Request to fetch Post with id: $postId received")
        val response = fetchPost.byId(postId)
        return ResponseEntity.ok(response)
    }

    @GetMapping
    fun getPostPages(
        @RequestParam("page") page: Int,
        @RequestParam("size") size: Int,
    ): ResponseEntity<Page<PostDocument>> {
        val response = fetchPost.byPage(page, size)
        return ResponseEntity.ok(response)
    }

    // TODO: Retornar um array talvez eu consigo retornar tudo em 1 só endpoint -> Na verdade não sei se isso é bom? kk
    @GetMapping(
        value = ["{postId}"],
        produces = [MediaType.IMAGE_JPEG_VALUE]
    )
    fun findPostImage(
        @PathVariable postId: String
    ): ResponseEntity<ByteArray> {
        val response = fetchPost.image(postId)
        return ResponseEntity.ok(response)
    }

    @PostMapping(
        value = ["{postId}"],
        consumes = [MediaType.MULTIPART_FORM_DATA_VALUE]
    )
    fun addPostImage(
        @PathVariable postId: String,
        @RequestParam("file", required = true) file: MultipartFile
    ): ResponseEntity<Unit> {
        val response = createPost.insertImage(postId, file)
        return ResponseEntity.ok().build()
    }
}
