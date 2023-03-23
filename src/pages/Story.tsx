import React from 'react'
import styled from 'styled-components'
import Header from '../components/header'
import Footer from '../components/footer'

function Story() {
  return (
    <MainPage>
      <Header />
      <History>
        <HistoryText>
          The Vintage Caravan are a rock band from Álftanes, Iceland. The band
          was formed in 2006 by Óskar Logi Ágústsson and Guðjón Reynisson before
          bassist Alexander Örn Númason joined after the first studio album. As
          of 2021, the band have released five studio albums and are currently
          signed with Napalm Records.
        </HistoryText>
        <HistoryText>
          In 2006, 12 year-old school friends Óskar Logi Ágústsson (guitar and
          vocals) and Guðjón Reynisson (drums) formed the band. Serious work
          only began in 2009 and within two years the band self-published their
          eponymous first album. In early 2012, the band signed a deal with
          Icelandic record label Sena ahead of work for their second album.
          Alexander Örn Númason joined shortly after on bass. A second album
          Voyage was released in 2012 initially by Sena. The band signed to
          Nuclear Blast shortly after the release of Voyage. This led to a
          Expand Your Mind music video produced and released by the German
          record label. The short film shows the psychedelic 'trips' the three
          members experience. As of July 2015, the video reached 400,000 hits on
          YouTube becoming the most viewed online song by the band. Nuclear
          Blast re-released Voyage to a much wider audience.[2] 2014 saw the
          band playing at festivals such as Roadburn Festival, Wacken Open Air
          and Hard Rock Hell.[citation needed] In April 2015, the band announced
          on Facebook that drummer Guðjón Reynisson had left the band for
          personal reasons however still remained good friends with the
          remaining band members. In the same post, Stefán Ari was introduced to
          fans as the new drummer of the band. On 15 May 2015, Arrival was
          released with Nuclear Blast as the band's third studio album. This was
          the first record since the recent line-up change.[citation needed] The
          band's four studio album Gateways was released in 2018.[3] Two years
          later the band signed with Napalm Records ahead of the release of the
          fifth album Monuments. Much like previous albums, Monuments received
          mostly positive reviews, with Loudersound in particular finishing
          their 4 out of 5 star review with the sentence 'The Vintage Caravan
          just get better and better.'[4]
        </HistoryText>
      </History>

      <Footer />
    </MainPage>
  )
}

const MainPage = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`
const History = styled.div`
  display: flex;
  justify-content: center;
`
const HistoryText = styled.p`
  display: flex;
`

export default Story
