package com.server.taxco.domain.service

import com.server.taxco.application.web.request.CreatePostRequest
import org.springframework.web.multipart.MultipartFile

/**
 * I know that's not a good convention to use verbs on class names but i just like that way
 */
interface UpdatePostService {
    fun create(request: CreatePostRequest)
    fun insertImage(postId: String, file: MultipartFile)
    fun insertContent(postId: String, file: MultipartFile)
    fun updateBasicInfo(postId: String, request: CreatePostRequest)
    fun updateImage(postId: String, file: MultipartFile)
    fun updateContent(postId: String, file: MultipartFile)
}
