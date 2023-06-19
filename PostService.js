import Post from "./Post.js";
import fileService from "./fileService.js";

class PostService {
  async create(post, picture) {
    try {
      const fileName = fileService.saveFile(picture);
      const createdPost = await Post.create({ ...post, picture: fileName });
      return createdPost;
    } catch (error) {
      console.log(error);
    }
  }

  async getAll() {
    const posts = await Post.find();
    return posts;
  }

  async getOne(_id) {
    if (!_id) {
      throw new Error("ID is not mentioned");
    }
    const post = await Post.findById(_id);
    return post;
  }

  async update(post) {
    if (!post._id) {
      throw new Error("ID is not mentioned");
    }
    const updatedPost = await Post.findByIdAndUpdate(post._id, post, {
      new: true,
    });
    return updatedPost;
  }

  async delete(_id) {
    if (!_id) {
      throw new Error("ID is not mentioned");
    }
    const post = await Post.findByIdAndDelete(_id);
    return post;
  }
}

export default new PostService();
