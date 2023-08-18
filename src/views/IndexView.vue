<template>
  <infoItem :title="'Theme'" :line="'purple_left'">
    <p>
      SNiC is the largest national Computer Science and Artificial Intelligence
      conference, organized for and by students. This edition's theme of the
      conference is CelerIT, Swiftness of Technology, the speed at which the IT
      sector has evolved and developed in the relative short timespan of 40-60
      years. We focus on three aspects: the technology of the past, the
      technology of today and the technology of the future.
    </p>
    <p>
      Our sector is relatively new, but it is undergoing gigantic changes in a
      short period of time. Many technologies from the 1990s and later are still
      being used, for example Internet protocols or (small) parts of the
      Microsoft Windows operating system. Choices were made here in the past,
      but how have these choices affected our current technology? What
      consequences have these choices had? And how changeable is IT?
    </p>
    <p>
      Second, there is the technology of today. Our society has become very
      dependent on IT, even though there may still be very old components among
      them. How do we maintain all these systems? How did we get to this point
      in the first place? Of course, there has been a lot of innovation in other
      areas that creates new applications, such as artificial intelligence and
      distributed computing. What role do these play now?
    </p>
    <p>
      Finally, there is the technology of the future. The importance of IT has
      only grown in recent decades and will undoubtedly only increase. What
      exciting developments await us and what consequences will they have? What
      do we as a society have to watch out for and what should we look forward
      to with great enthusiasm? Quantum computers, the influence of Big Tech and
      the Internet of Things are some examples of the vast domain that the
      future holds.
    </p>
  </infoItem>
  <infoItem :title="'Tickets'" :line="'purple2_right'"
    ><p>
      With your SNiC 2022: CelerIT ticket, you get full access to everyting the
      conference has to offer. From the necessary bus trip from and to your
      university campus, to lunch and dinner. From an amazing spectrum of
      different speakers, to a free goodiebag. Even the social drink afterwards
      is included!
    </p>
    <p>
      You can buy tickets for the SNiC 2022: CelerIT conference at participating
      study associations. Visit their website or their office/room for more
      information about where to get your ticket.
    </p></infoItem
  >
</template>

<script setup lang="ts">
import infoItem from "@/components/InfoItemComponent.vue";
</script>
