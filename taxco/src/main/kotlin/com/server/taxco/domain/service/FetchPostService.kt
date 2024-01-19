package com.server.taxco.domain.service

import com.server.taxco.application.web.response.PostResponse
import com.server.taxco.resources.database.PostDocument
import org.springframework.data.domain.Page

/**
 * I know that's not a good convention to use verbs on class names but i just like that way
 */
interface FetchPostService {
    fun byId(postId : String) : PostResponse
    fun byPage(page : Int, size : Int) : Page<PostDocument>
    fun image(postId: String) : ByteArray

}