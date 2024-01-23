package com.server.taxco.domain.service

import com.server.taxco.application.web.request.CreateArticleRequest
import com.server.taxco.domain.article.ArticleId
import org.springframework.web.multipart.MultipartFile

/**
 * I know that's not a good convention to use verbs on class names, but I just like that way
 */
interface UpdateArticleService {
    fun create(request: CreateArticleRequest) : ArticleId
    fun insertImage(articleId: String, file: MultipartFile)
    fun insertContent(articleId: String, file: MultipartFile)
    fun updateBasicInfo(articleId: String, request: CreateArticleRequest)
    fun updateImage(articleId: String, file: MultipartFile)
    fun updateContent(articleId: String, file: MultipartFile)
}
