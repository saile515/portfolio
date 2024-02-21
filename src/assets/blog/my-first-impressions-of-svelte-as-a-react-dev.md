---
title: My First Impressions of Svelte as a React Dev
author: Elias Jörgensen
slug: my-first-impressions-of-svelte-as-a-react-dev
date_published: 2024-02-21
date_edited:
---

I recently felt the need to rewrite my portfolio site, since the old one had a couple of years on it's back. Instead of
creating a new Next.js project like I normally do when creating websites, I decided to try something new, namely Svelte.
Except for some minor work with my own framework templtr, I have never used any web framework except React before this.
Therefore, this would be a valuable experience for me.

In this article I will share my experience of trying Svelte and SvelteKit for the first time, comparing it with my
experience of using React and Next.js. It is important to note that this is all personal opinion, and should not be used
as a single source of truth of which framework is "better". Remember to do your own research.

## The Project

I thought that a perfect way to try Svelte was rewriting my portfolio site. It is a relatively small project, while
still incorporating a variety of website elements. It would need to be animated, good looking, have a contact form, and
of course have this blog. This allowed me to test out the animation utilities, form handling, server functions, and
static site generation.

I decided to use TailwindCSS and TypeScript when creating the site, since I enjoy using them.

Without further ado, here are my first impressions:

## Less Boilerplate

One of the first things I noticed about Svelte is how little code is required to get a basic component. Here is an
example of a counter component in both React and Svelte:

React:

```tsx
import { useState } from "react";

export function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <span>{count}</span>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}>
                Click me!
            </button>
        </div>
    );
}
```

Svelte:

```svelte
<script lang="ts">
    let count = 0;
</script>

<div>
    <span>{count}</span>
    <button
        on:click={() => {
            count++
        }}>
        Click me!
    </button>
</div>
```

In the above examples, React used a whopping 336 characters, while Svelte managed to do the exact same thing with
only 176. React used almost double the characters, 4 more lines, and 17 more columns. Keep in mind that this is affected
by my code formatting, and results may vary depending on your prefrences.

## Cleaner syntax

Since Svelte is designed from the ground up as a compiled framework, it made it possible to adjust the syntax to make it
more user friendly. Events, attributes, and state for example, have a much nicer syntax in Svelte in my opinion. React
on the other hand is in its root a library. Thus, many features are implemented in standard JavaScript syntax. JSX is of
course much better than writing React code in pure JS, but things like state are still implemented as JavaScript
functions. A prime example of React having to adhere to the limitations of being a library is the infamous `className`
attribute, which is necessary since `class` is a reserved keyword in JavaScript. Svelte on the other hand has kept the
HTML standard keyword `class`.

## Performance

I will keep this section short since I haven't done any benchmarks on the performance of either framework. However, my
general impression of using Svelte is that both compile times and page load times are blazingly fast. This is comparison
to Next.js, which takes ages to compile in comparison, and it generally feels slower to navigate between pages. However,
this might be a "shiny new toy" bias, so take it with a grain of salt.

## TypeScript/LSP integration

This is the first downside I noticed with Svelte. While TypeScript is supported, it is somewhat treated as a second
class citizen. This is mainly due to having to specify `lang="ts"` on every script tag in the project. This isn't a huge
problem, and once I'd gotten used to it, I didn't put much thought to it.

Another issue I experienced with Svelte is the LSP/Syntax highlighter integration. This might be my own fault for using
NeoVim, but it was much harder to get the LSP and syntax highlighting working compared to something like JSX. Even when
I got it working, it sometimes just stops, requiring me to restart NeoVim's LSP server. The syntax highlighter I found
(sidenote: this is the first time I've had to seperatly install a syntax highlighter for a language), sometimes
highlights incorrectly, leaving massive white spots in the code.

I know this isn't the fault of the Svelte team, but it is still something to consider when choosing a framework.

## Features

When I went into this, I was expecting to have to sacrifice a bunch of features I am used to with Next.js, since Svelte
as a much smaller community. However, this was not the case. I actually found Svelte more feature rich compared to
Next.js. The few things I needed that weren't built into Svelte had very solid libraries, which integrated nicely with
the Svelte code. One thing in particular that I found very useful with Svelte is the transitions and animations. In
Next.js I've had to rely on libraries like React Spring to create transition effects. In Svelte however, everything I
needed was built into the framework.

## Conclusion

I am overall very impressed with Svelte. It has a very nice syntax which requires less code compared to React. It also
feels more like using native features of HTML and JS, like state and props, compared to React which uses JavaScript
functions to achieve this. I managed to create the entire front page for this site in only two days with Svelte, which
probably would have taken me closer to a week in Next.js, especially the first time I used it. I will have to see how I
like Svelte in the long term, but I will definitely be sticking to it as my framework of choice from now on.
