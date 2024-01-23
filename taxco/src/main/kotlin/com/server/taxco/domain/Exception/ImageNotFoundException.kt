package com.server.taxco.domain.Exception

import com.server.taxco.common.ErrorType
import com.server.taxco.domain.article.ArticleId

class ImageNotFoundException(
    articleId: ArticleId,
    msg: String = "Article with ID: ${articleId.value} does not have a image associated"
) : DomainException(
    type = ErrorType.IMAGE_NOT_FOUND,
    msg = msg
)
