---
layout: post
title:  "Allegro Vivace tutorial"
summary: "Going back to C++"
date:   2023-07-04 10:00:00
preview: /assets/vivaceTutorial2.png
---

![Picture 1](/assets/vivaceTutorial2.png)

Project Date: July 2023

<a href="https://github.com/liballeg/allegro5/wiki/Allegro-Vivace">You can find Allegro Vivace tutorials here</a>.

I had some summer vacation from my job. Went on a long bicycle ride on southeastern coast of Finland. From Turku to Pori within two days. It was over 200km distance. Got bit burned out on traveling with a bike. Then had a restful rest of the week and next week went swimming and lately went through this tutorial for Allegro C++ library for video-games and other media.

It was a good refresher to C++ language as I haven't had need for it in the work as we mainly use C# with .NET framework and such for the Azure cloud services.

So anyway this was a good tutorial to the Allegro library. I found the library as I researched how <a href="https://www.factorio.com/">Factorio</a> was made. As it is very powerful game with many sprites and mechanics working simultaneously, I figured out learning what they used to make it would be interesting at the least. It was originally made using <a href="https://liballeg.org/">Allegro</a>, but they later changed to use <a href="https://libsdl.org/">SDL2</a>, because of the <a href="https://www.factorio.com/blog/post/fff-230">technical issues and driver problems</a> and to work further down the line.

The Vivace tutorial has a bit of a learning curve, but if you are somewhat familiar with the C++ language at least you're good to go. Tutorial starts very simple and expands on what it has already teached, which is a nice and makes it easy to understand. First you start to make window appear, then text on the window, then images and primitive shapes like rectangles and circles, then animating them moving, adding sounds and music. Then finally create a game in the last part of the tutorial, which is long and detailed, but if you read the earlier parts well and internalized the knowledge, you'll be just fine, because it uses same parts and just adds some logic on top of it.

I'm not gonna post a source code of my own of it, because it's mostly the same as in the tutorial. I did do some of the extra challenges such as adding highscore board at the end when game over screen and refactored the code to multiple files, which actually took some time. Art assets are from the tutorial.

![Picture 1](/assets/vivaceTutorial.png)

I might try to refactor this to use SDL2 library instead of Allegro as an exercise.
But I do recommend giving it a try if you want to use C++ in a game and get some experience with it.