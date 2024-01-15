package com.server.taxco.common

import com.github.f4b6a3.ulid.Ulid

interface ID {
    companion object {
        fun generate(): String = Ulid.fast().toString()
    }
}
