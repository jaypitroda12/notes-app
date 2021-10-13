import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { Note, NoteDocument } from './entities/note.entity';

@Injectable()
export class NotesService {
  constructor(
    @InjectModel(Note.name) private readonly noteModel: Model<NoteDocument>,
  ) {}

  create(createNoteDto: CreateNoteDto) {
    const createdCat = new this.noteModel(createNoteDto);
    return createdCat.save();
  }

  findAll() {
    return this.noteModel.find().exec();
  }

  update(id: string, UpdateNoteDto: UpdateNoteDto) {
    return this.noteModel
      .findByIdAndUpdate(id, UpdateNoteDto, { useFindAndModify: false })
      .exec();
  }

  remove(id: string) {
    return this.noteModel.findByIdAndDelete(id).exec();
  }
}
