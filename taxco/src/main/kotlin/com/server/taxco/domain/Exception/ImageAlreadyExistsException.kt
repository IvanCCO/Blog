package com.server.taxco.domain.Exception

import com.server.taxco.common.ErrorType
import com.server.taxco.domain.article.ArticleId

class ImageAlreadyExistsException(
    articleId: ArticleId,
    msg: String = "Article with ID: ${articleId.value} already have a image associated," +
        " use the update image endpoint instead"
) : DomainException(
    type = ErrorType.IMAGE_ALREADY_EXISTS,
    msg = msg
)
