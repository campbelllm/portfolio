import styled from "styled-components/macro";
import tetrisBackground from "./tetrisBackground.png"

export const AllProjects = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0;
  @media   (max-width: 500px) {
    flex-direction: column;
  }
`;

export const ProjectSection1 = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 50%;
  margin: 0;
  @media   (max-width: 500px) {
    width: 100%;
  }
`;

export const ProjectSection2 = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 50%;
  margin: 0;
  @media   (max-width: 500px) {
    width: 100%;
  }
`;

export const Project1 = styled.div`

  background-image: url(${tetrisBackground});
  background-size: cover;
  width: 90%;
  height: 500px;
  margin: 20px;
  display: flex;

  & a {
    display: flex;
    color: transparent;
    font-size: 60px;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    margin: 0;
    width: 100%;
    height: 100%;
  }

  & a:hover {
    color: #d3c4be;
    background: #fff;
    opacity: 0.5;
  }
   @media (max-width: 1000px) {
    height: 400px;
    margin: 0;
    margin: 20px;
  }
`;
export const Project2 = styled.div`
  background-color: #d3c4be;
  width: 90%;
  height: 500px;
  margin: 20px;
  display: flex;

  & a {
    display: flex;
    color: transparent;
    font-size: 60px;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    margin: 0;
    width: 100%;
    height: 100%;
  }

  & a:hover {
    color: #d3c4be;
    background: #fff;
    opacity: 0.5;
  }
   @media (max-width: 1000px) {
    height: 400px;
    margin: 0;
    margin: 20px;
  }
`;
export const Project3 = styled.div`
  background-color: #d3c4be;
  width: 90%;
  height: 500px;
  margin: 20px;
  display: flex;

  & a {
    display: flex;
    color: transparent;
    font-size: 60px;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    margin: 0;
    width: 100%;
    height: 100%;
  }

  & a:hover {
    color: #d3c4be;
    background: #fff;
    opacity: 0.5;
  }
   @media (max-width: 1000px) {
    height: 400px;
    margin: 0;
    margin: 20px;
  }
`;
export const Project4 = styled.div`
  background-color: #d3c4be;
  width: 90%;
  height: 500px;
  margin: 20px;
  display: flex;

  & a {
    display: flex;
    color: transparent;
    font-size: 60px;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    margin: 0;
    width: 100%;
    height: 100%;
  }

  & a:hover {
    color: #d3c4be;
    background: #fff;
    opacity: 0.5;
  }
   @media (max-width: 1000px) {
    height: 400px;
    margin: 0;
    margin: 20px;
  }
`;