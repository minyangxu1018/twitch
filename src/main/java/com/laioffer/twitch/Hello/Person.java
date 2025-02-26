package com.laioffer.twitch.Hello;


public record Person(
        String name,
        String company,
        Address homeAddress,
        Book favoriteBook
) {
}
